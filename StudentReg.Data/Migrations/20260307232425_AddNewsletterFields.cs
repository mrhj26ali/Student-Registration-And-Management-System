using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudentReg.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddNewsletterFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "EnrollNewsletter",
                table: "Students",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Preference",
                table: "Students",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EnrollNewsletter",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Preference",
                table: "Students");
        }
    }
}
