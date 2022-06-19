endpoint = `https://api.phamvandien.xyz`
message_list = [{
	icon: 'fas fa-file-code',
	title: 'Template Recode by m hadi f',
	timing: '1630143780561'
}, {
	icon: 'fal fa-industry-alt',
	title: 'Template by AdminLTE',
	timing: ''
}, {
	icon: 'fab fa-font-awesome-flag',
	title: 'Icon by FontAwesome',
	timing: ''
}, {
	icon: 'fal fa-engine-warning',
	title: 'Menu error? lapor owner!',
	timing: '1631004127580'
}];

item_list = [{
	name: 'TikTok',
	icon: 'fa-brands fa-tiktok',
	item: [{
		"url": endpoint + "/tiktok?url=https://vm.tiktok.com/ZMLMbkp82",
		"name": "TikTok Downloader"
	},
	{
		"url": endpoint + "/tiktok?search=son tung",
		"name": "TikTok Search"
	},
	{
		"url": endpoint + "/tiktok?username=ltkh2004",
		"name": "TikTok Info User"
	}]
},
{
	name: 'SoundCloud',
	icon: 'fa-brands fa-soundcloud',
	item: [{
		"url": endpoint + '/soundcloud?search=son tung',
		"name": "SoundCloud Search"
	},
	{
		"url": endpoint + '/soundcloud?url=https://soundcloud.com/sontungmtp-music/ch-ng-ta-c-a-hi-n-t-i',
		"name": "SoundCloud Downloader"
	}]
},
{
	name: 'Youtube',
	icon: 'fa-brands fa-youtube',
	item: [{
		"url": endpoint + '/youtube?search=son tung',
		"name": "Youtube Search"
	},
	{
		"url": endpoint + '/youtube?GetVideoId=https://www.youtube.com/watch?v=Jk38OqdAQxc',
		"name": "Get Video Id"
	},
	{
		"url": endpoint + '/youtube?GetVideoDetails=xypzmu5mMPY',
		"name": "Get Video Details"
	},
	{
		"event": 'Some Error',
		"url": endpoint + '/youtube?downloadVideo=Jk38OqdAQxc',
		"name": "Youtube Downloader"
	}]
},
{
	name: 'Short Url',
	icon: 'fa-solid fa-curling-stone',
	item: [{
		"url": endpoint + '/slink?url=https://www.youtube.com/watch?v=Jk38OqdAQxc',
		"name": "Short Url"
	}]
},
{
	name: 'Pinterest',
	icon: 'fa-brands fa-pinterest',
	item: [{
		"url": endpoint + '/pinterest?search=mirai',
		"name": "Search"
	}]
},
{
	name: 'Random Images',
	icon: 'fa-solid fa-images',
	item: [{
		"event": 'NSFW',
		"url": endpoint + '/images/ausand',
		"name": "Ausand"
	},
	{	
		"event": 'NSFW',
		"url": endpoint + '/images/du',
		"name": "NSFW 1"
	},
	{
		"event": 'NSFW',
		"url": endpoint + '/images/girl',
		"name": "NSFW 2"
	},
	{
		"event": 'NSFW',
		"url": endpoint + '/images/mong',
		"name": "NSFW 3"
	},
	{
		"event": 'NSFW',
		"url": endpoint + '/images/anime',
		"name": "Anime"
	}]
},
	{
		name: 'Liên hệ Admin',
		icon: 'fas fa-user-headset',
		item: [{
			event: 'DO NOT SPAM',
			url: 'https://www.facebook.com/PhamVanDien.User/',
			name: 'Facebook'
		}]
	}];
