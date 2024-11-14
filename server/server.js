import express from 'express';


const server = express();

// priimti JSON duomenis
server.use(express.json());



server.listen(8080, () => {
	console.log("Express serveris Sėkmingai paleistas. http://localhost:8080");
   
});