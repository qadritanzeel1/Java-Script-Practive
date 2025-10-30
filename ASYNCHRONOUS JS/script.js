//main thread -->jahan par synchronous code chalta hai sab se pehle
//main stack-->jo bhi main stack par aayega wahi chalega
//call stack
// webAPI----> vrowser ki taraf se kahi saare features milte hai jo JS mai nahi hote woh features hym js mai use toh karte hai par woh js k features nahi hote woh humain browser se milte hai

//synch cod emain thread mai chalna chalu hojata hai, and asynch code ko webAPI's behind the scenes operate karna chaloo kar deti hai ,jab ye code complete hota hai tab ye code ka completion move hojata hai callback queue mein
//callback queue
//microtask queue
//macrotask queue 


// code 2 type k hote hai ->sync and async
//sync code jaldi chalta hai
//async code baad mai chalta hai


//async code sab se pehle jata hai webAPIs pe,jab waha pe ye resolve hojata hai, tab ye code jata hai callback queue mai and fir event loop check karta ha main thread mai call stack khali hua hai ya nahi and agar hua toh main thread unn stack par reh rahe execution contexts ko execute karta hai