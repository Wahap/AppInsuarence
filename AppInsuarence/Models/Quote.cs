using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AppInsuarence.Models
{
    public class Quote
    {
        [Key]
        public int IdQuate { get; set; }
        public int IdCustomer { get; set; }
        public int IdInsuarenceType { get; set; }
        public string Location { get; set; }
        public int TotalInsuarenceYear { get; set; }
        public string CoverAmountRange { get; set; }
        public int Age { get; set; }
    }
}