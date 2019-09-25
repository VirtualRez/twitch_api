
var top1 = $("#t1");

$.ajax({//GET Top 10 Streamers by number of views
    'url': `https://api.twitch.tv/kraken/streams/?limit=10`,
    'headers': { 'Client-ID': 'e58bb9u3nmtqp4ikxaz1qg05kelpy7l', 'Accept': 'application/vnd.twitchtv.v5+json' },
    'success': (data) => {
        console.log(data);
        data.streams.forEach((element,index) => {
            
            top1.append(
            `<tr>
                <th id="a${index}i"><img class="logoReduction" src="${element.channel.logo}"></img></th>
                <td class="nameCap">${element.channel.name}</td>
                <td>${element.channel.followers}</td>
                <td>${element.viewers}</td>
                <td id="a${index}f"><a href="${element.channel.url}" target="_blank">${element.channel.name}.twitch</a></td>
            </tr>`);
        })
    }
});