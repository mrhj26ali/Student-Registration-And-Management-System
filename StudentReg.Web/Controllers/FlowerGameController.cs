using Microsoft.AspNetCore.Mvc;

namespace StudentReg.Web.Controllers
{
    public class FlowerGameController : Controller
    {
        public IActionResult Display()
        {
            return View();
        }
    }
}