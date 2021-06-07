using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace sKul.API.Migrations
{
    public partial class homework : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "homeworks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Classes = table.Column<string>(nullable: false),
                    Section = table.Column<string>(nullable: false),
                    SubGroup = table.Column<string>(nullable: false),
                    Subject = table.Column<string>(nullable: false),
                    HomeworkDate = table.Column<DateTime>(nullable: false),
                    SubmissionDate = table.Column<DateTime>(nullable: false),
                    AttachDocxname = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_homeworks", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "homeworks");
        }
    }
}
