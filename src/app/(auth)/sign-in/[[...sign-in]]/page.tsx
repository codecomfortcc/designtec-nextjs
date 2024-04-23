import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import background from "@/assets/background.svg";
export default function Page() {
  return (
    
        <SignIn
          path="/sign-in"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
             
              rootBox: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
        
              },
              cardBox: {
                boxShadow: "none",
                width: "100%",
                height: "100%",
              },
              card: {
               height:'100%',
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "20px"
              },
            
            },
          
          }}
        
        />
   
  );
}
