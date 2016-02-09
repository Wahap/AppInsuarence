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
    public class QuoteApiController : ApiController
    {
        private InsuarenceEntity db = new InsuarenceEntity();

        // GET api/QuoteApi
        public IEnumerable<Quotes> GetQuotes()
        {
            return db.Quotes.AsEnumerable();
        }

        // GET api/QuoteApi/5
        public Quotes GetQuotes(int id)
        {
            Quotes quotes = db.Quotes.Find(id);
            if (quotes == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return quotes;
        }

        // PUT api/QuoteApi/5
        public HttpResponseMessage PutQuotes(int id, Quotes quotes)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != quotes.IdQuate)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(quotes).State = EntityState.Modified;

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

        // POST api/QuoteApi
        public HttpResponseMessage PostQuotes(Quotes quotes)
        {
            if (ModelState.IsValid)
            {
                quotes.IdCustomer = 11;
                db.Quotes.Add(quotes);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, quotes);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = quotes.IdQuate }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/QuoteApi/5
        public HttpResponseMessage DeleteQuotes(int id)
        {
            Quotes quotes = db.Quotes.Find(id);
            if (quotes == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Quotes.Remove(quotes);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, quotes);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}