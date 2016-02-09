using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppInsuarence.Models
{
    public class User
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public int UserType { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}