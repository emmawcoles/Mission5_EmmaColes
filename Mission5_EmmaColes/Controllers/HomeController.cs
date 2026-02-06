using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Mission5_EmmaColes.Models;

namespace Mission5_EmmaColes.Controllers
{
    // handles the navigation for the home page and the calculator page
    public class HomeController : Controller
    {
        // navigation to the home page
        public IActionResult Index()
        {
            return View();

        }

        // navigation to the calculator page
        public IActionResult Calculator()
        {
            return View();
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
