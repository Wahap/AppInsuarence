using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AppInsuarence.Models
{
    public class InsuarenceType
    {
        [Key]
        public int IdType { get; set; }
        public string Name { get; set; }
    }
}