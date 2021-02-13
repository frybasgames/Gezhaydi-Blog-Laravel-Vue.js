import AppStorage from "./AppStorage";

class Token{
    isValid(token){
        const payload=this.payload(token);
        if (payload){
            return payload.iss="http://127.0.0.1:8000/api/login" || "http://127.0.0.1:8000/api/singup" ? true : false;
        }
        return false;
    }
    payload(token){
        const payload=token.split('.')[1];
        return this.decode(payload);

    }
    decode(payload){
        return JSON.parse(atob(payload));
    }


}
export default  Token=new Token();
