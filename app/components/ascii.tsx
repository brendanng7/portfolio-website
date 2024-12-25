export default function Ascii() {
  const art = `
 ,ggggggggggg,                                                                          
dP"""88""""""Y8,                                           8I                           
Yb,  88      \`8b                                           8I                           
 \`"  88      ,8P                                           8I                           
     88aaaad8P"                                            8I                           
     88""""Y8ba   ,gggggg,   ,ggg,    ,ggg,,ggg,     ,gggg,8I    ,gggg,gg   ,ggg,,ggg,  
     88      \`8b  dP""""8I  i8" "8i  ,8" "8P" "8,   dP"  "Y8I   dP"  "Y8I  ,8" "8P" "8, 
     88      ,8P ,8'    8I  I8, ,8I  I8   8I   8I  i8'    ,8I  i8'    ,8I  I8   8I   8I 
     88_____,d8',dP     Y8, \`YbadP' ,dP   8I   Yb,,d8,   ,d8b,,d8,   ,d8b,,dP   8I   Yb,
    88888888P"  8P      \`Y8888P"Y8888P'   8I   \`Y8P"Y8888P"\`Y8P"Y8888P"\`Y88P'   8I   \`Y8 
        `;
  return (
    <p className="hidden sm:block sm:text-xs text-center whitespace-pre-wrap text-gray-500 dark:text-white mb-8">
      {art}
    </p>
  );
}
