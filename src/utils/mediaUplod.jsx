import { createClient } from "@supabase/supabase-js";
import { toast } from "react-hot-toast";

const supabase=createClient(

"https://vxmbtbvecipufthhazrb.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bWJ0YnZlY2lwdWZ0aGhhenJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0MTUzMTAsImV4cCI6MjA4Mjk5MTMxMH0.jGQj2tQvFwNdO-g-h-KqShEiITf0fFLCxpcAScZEeo0"



);
export default function Mediauplod(file) {
    const promise=new Promise((resolve,reject)=>{
        if(file==null){
            reject(new Error("No file uploaded"))
        }
        const timeStamp=new Date().getTime()
        const fileName=timeStamp+file.name
        supabase.storage.from('images').upload(fileName,file,

{
    cacheControl:"3600",
    upsert:false
}

        ).then((response) => {
            console.log(response);
            toast.success("File uploaded successfully");
            const url=supabase.storage.from('images').getPublicUrl(fileName).data.publicUrl
            console.log(url);
            resolve(url)
        }
        ).catch((error) => {
            console.log(error);
            reject(error)
        });
      
    })

  return promise

}