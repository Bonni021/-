let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🥑💕➢ 𝐂𝐀𝐂𝐀𝐇𝐔𝐀𝐓𝐄𝐒 𝐁𝐎𝐓🥑💕 ${pesan}`
let teks = `Creador Wa.me/5493487478549 SI QUIERES BOT COMUNICAME
👨🏻‍💻💙 𝐂𝐀𝐂𝐀𝐇𝐔𝐀𝐓𝐄𝐒 𝐁𝐎𝐓🥑💕 \n\n❏ ${oi}\n❏ 🥑💕➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🥑💕≽ @${mem.id.split('@')[0]}\n`}
teks += `➥𝐂𝐀𝐂𝐀𝐇𝐔𝐀𝐓𝐄𝐒 𝐁𝐎𝐓🥑💕`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
