using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace AppInsuarence.Models
{
    public class Customer : User
    {
        [Key]
        public int IdCustomer { get; set; }
        public int Age { get; set; }
    }
}