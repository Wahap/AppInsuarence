//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AppInsuarence.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Quotes
    {
        public int IdQuate { get; set; }
        public int IdCustomer { get; set; }
        public string InsuarenceType { get; set; }
        public string Location { get; set; }
        public int TotalInsuarenceYear { get; set; }
        public string CoverAmountRange { get; set; }
        public Nullable<int> Age { get; set; }
    }
}