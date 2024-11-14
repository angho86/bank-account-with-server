import express from 'express';
import cors from "cors";

const server = express();

// priimti JSON duomenis
server.use(express.json());
server.use(cors());


server.listen(8080, () => {
	console.log("Express serveris Sėkmingai paleistas. http://localhost:8080");
   
});