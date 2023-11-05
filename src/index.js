const { Client, GatewayIntentBits, Events } = require('discord.js'); // 패키지 불러오기
const { token } = require('../config.json'); // 설정 파일 불러오기

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // client 인스턴스 생성 

client.once(Events.ClientReady, client => { // ClientReady 이벤트 
	console.log(`${client.user.tag} | 로그인 하였습니다.`); // 어떤 애플리케이션으로 로그인하였는지 출력
});

client.login(token); // 봇 로그인하기