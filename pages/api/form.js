export default function handler(req, res) {
    // Get data submitted in request.
    const body = req
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
    res.status(200).json({ data: `${body}` })
  }