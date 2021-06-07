using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace sKul.API.Migrations
{
    public partial class j165 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "TimeTables",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Classes = table.Column<string>(nullable: true),
                    Sec = table.Column<string>(nullable: true),
                    WeekDay = table.Column<string>(nullable: true),
                    timefrom = table.Column<string>(nullable: true),
                    timeTo = table.Column<string>(nullable: true),
                    RoomNo = table.Column<int>(nullable: false),
                    teachersId = table.Column<int>(nullable: false),
                    subjectsId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeTables", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TimeTables_Subject_subjectsId",
                        column: x => x.subjectsId,
                        principalTable: "Subject",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TimeTables_employees_teachersId",
                        column: x => x.teachersId,
                        principalTable: "employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }
    }
}
