import server from "../_boot/server";
import app from "../index";
import database from "../_boot/db.connection";

export const main = async () => {

    try {
        
        await server(app);
        
        await database();
        
        process.on('SIGTERM', async () => {
            console.info("SIGTERM received")
        })

    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }
};