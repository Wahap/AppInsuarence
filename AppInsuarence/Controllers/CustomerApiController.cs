using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using AppInsuarence.Models;

namespace AppInsuarence.Controllers
{
    public class CustomerApiController : ApiController
    {
        private InsuarenceEntity db = new InsuarenceEntity();

        // GET api/Default1
        public IEnumerable<Customers> GetCustomers()
        {
            return db.Customers.AsEnumerable();
        }

        // GET api/Default1/5
        public Customers GetCustomers(int id)
        {
            Customers customers = db.Customers.Find(id);
            if (customers == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return customers;
        }

        // GET api/Defa
        public HttpResponseMessage Login(Customers cs) 
        {
            int IsOk = db.Customers.Where(x => x.UserName == cs.UserName && x.Password == cs.Password).Count();
            if (IsOk !=1)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }
            return Request.CreateResponse(HttpStatusCode.OK);
           
        }

        // PUT api/Default1/5
        public HttpResponseMessage PutCustomers(int id, Customers customers)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != customers.IdCustomer)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(customers).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/Default1
        public HttpResponseMessage PostCustomers(Customers customers)
        {
            if (ModelState.IsValid)
            {
                db.Customers.Add(customers);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, customers);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = customers.IdCustomer }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Default1/5
        public HttpResponseMessage DeleteCustomers(int id)
        {
            Customers customers = db.Customers.Find(id);
            if (customers == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Customers.Remove(customers);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, customers);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}