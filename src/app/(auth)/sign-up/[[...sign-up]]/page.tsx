import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import background from "@/assets/background.svg";
export default function Page() {
  return (
        <SignUp
          path="/sign-up"
          signInUrl="/sign-in"
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
