using System;
using System.IO;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using sKul.API.Data;
using sKul.API.Data.AcadmicRepo;
using sKul.API.Helper;
using sKul.API.Identity.Model;

namespace sKul.API {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        public void ConfigureDevelopmentServices (IServiceCollection services) {
            services.AddDbContext<DataContext> (s => s.UseMySql (Configuration.GetConnectionString ("DefaultConnection")));
            ConfigureServices (services);
        }
        public void ConfigureProductionServices (IServiceCollection services) {
            services.AddDbContext<DataContext> (s => s.UseMySql (Configuration.GetConnectionString ("DefaultConnection")));
            ConfigureServices (services);
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            services.Configure<ApplicationSetting> (Configuration.GetSection ("AppSettings"));

            var key = Encoding.UTF8.GetBytes (Configuration["AppSettings:Token"].ToString ());

            services.AddDbContext<DataContext> (s => s.UseMySql (Configuration.GetConnectionString ("DefaultConnection")));
            services.AddIdentityCore<ApplicationUser> ().AddRoles<IdentityRole> ().AddEntityFrameworkStores<DataContext> ();
            services.AddCors ();
            services.AddAuthentication (x => {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer (c => {
                c.RequireHttpsMetadata = false;
                c.SaveToken = false;
                c.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey (key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });
            // Auto Mapper Configurations
            var mappingConfig = new MapperConfiguration (mc => {
                mc.AddProfile (new Automapperprofiling ());
            });

            IMapper mapper = mappingConfig.CreateMapper ();
            services.AddSingleton (mapper);
            services.Configure<IdentityOptions> (opt => {
                opt.Password.RequireDigit = false;
                opt.Password.RequireNonAlphanumeric = false;
                opt.Password.RequireUppercase = false;
                opt.Password.RequireLowercase = false;
                opt.Password.RequiredLength = 4;
            });
            services.AddScoped<ISkulRepository, sKulRepository> ();
            services.AddScoped<IAcadmicRepository, AcadmicRepository> ();
            services.AddControllers (option => { option.EnableEndpointRouting = false; })
                .SetCompatibilityVersion (CompatibilityVersion.Version_3_0)
                .AddNewtonsoftJson (options => {
                    options.SerializerSettings.ContractResolver = new DefaultContractResolver ();
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            } else {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts ();
            }

            app.UseCors (builder =>
                builder.WithOrigins ("*", "*")
                .AllowAnyOrigin ()
                .AllowAnyHeader ()
                .AllowAnyMethod ());

            app.UseHttpsRedirection ();

            app.UseRouting ();
            app.UseAuthentication ();
            app.UseAuthorization ();
            app.UseStaticFiles ();
            app.UseStaticFiles (new StaticFileOptions () {
                FileProvider = new PhysicalFileProvider (Path.Combine (Directory.GetCurrentDirectory (), @"Resources")),
                RequestPath = new PathString ("/Resources")
            });

            app.UseEndpoints (endpoints => {
                endpoints.MapControllers ();
                endpoints.MapFallbackToController ("Index", "Fallback");
            });
        }
    }
}