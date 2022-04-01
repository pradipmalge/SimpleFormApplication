using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;

namespace TestFrontEndApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserDetailsController : ControllerBase
    {
       
        private readonly ILogger<UserDetailsController> _logger;

        public UserDetailsController(ILogger<UserDetailsController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public JsonResult PostUserDetails(UserDetails userDetails)
        {
            string jsonString = JsonSerializer.Serialize(userDetails);

            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), "UserDetails");

            var fullPath = Path.Combine(pathToSave, Guid.NewGuid().ToString()+".json");

            using (StreamWriter fs = new StreamWriter(fullPath))
            {
                fs.WriteLine(jsonString);
            }

            return new JsonResult("Saved user details Successfully");
        }

    }
}