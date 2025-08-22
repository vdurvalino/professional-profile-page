export async function typewriterEffect( text: string, callback: ( partial: string ) => void, speed = 50 ) {
    for (let i = 0; i <= text.length; i++) {
        callback(text.slice(0, i));
        await new Promise(( res ) => setTimeout(res, speed));
    }
}