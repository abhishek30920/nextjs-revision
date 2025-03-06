
export const dynamic="force-static" // this will make the page static
export const revalidate=10  // this will revalidate the page after 10 seconds build again
export  async function GET() {
  return Response.json({time: new Date().toISOString()})
}

// ROUTE HANDLERS ARE NOT CACHED BY DEFAULT BUT OU CAN OPT INTO CACHING WHEN USING THE GET METHOD
// CACHING ONLY WORKS WITH GET METHODS
// OTHER HTTP MERTHODS ARE NOT CACHED
// IF U ARE USING DYNAMIC FUNCTION LIKE HEADERS OR COOKIES, CACHING WILL NOT WORK