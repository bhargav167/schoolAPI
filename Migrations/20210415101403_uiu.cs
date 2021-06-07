using Microsoft.EntityFrameworkCore.Migrations;

namespace sKul.API.Migrations
{
    public partial class uiu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClassGroup",
                table: "homeworks",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClassGroup",
                table: "homeworks");
        }
    }
}
