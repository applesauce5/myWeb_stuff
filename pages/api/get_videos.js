import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Make a GET request to an external API
    const a_token = 'IGQWRNZAVVRT2ZAiTHYxR2JsdEd3NzIwMDBpc3l6RGRNUXhmRlRvZAmdRdmlhRkJWQ00zdVZASdDUwV1VfeVd0cmRyaXNfQ3lERkdTSFFWZAHRaNXZA4SFlRUERiZAXh4ajhUMDJKeV9qempPTzRRZAwZDZD'
    
    // const response = await axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${a_token}`);

    // GET THE MEDIA EDGE
    let req_media_edge = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${a_token}`
    const response = await axios.get(req_media_edge);
    
    // Extract the data from the response
    const edge_data = response.data;
    // console.log("PRINTING OUT IDs")
    
    let ids_list = [];

    for (let i = 0; i < edge_data['data'].length; i++){
      ids_list.push(edge_data['data'][i])
    }
    //console.log(ids_list)

    // GET THE VIDEOS
    
    let media_data_list = [];
    for (let i = 0; i < ids_list.length; i++){
      const id = ids_list[i].id
      let req_media = `https://graph.instagram.com/${id}?fields=id,media_type,media_url,username&access_token=${a_token}`
      let media_obj = await axios.get(req_media)
      if (media_obj.data.media_type == 'VIDEO'){
        media_obj.data.caption = ids_list[i].caption
        media_data_list.push(media_obj.data)
      }
    }
    console.log(media_data_list)


    // Return the data as the API response
    res.status(200).json(media_data_list);
  } catch (error) {
    // TODO: FIX THIS EVENTUALLY

    console.error('Error fetching data:', error.message);
    console.error('Putting in intermediary stale data in place')
    const ex_data_string = `[
      {
        "id": "17983728973981815",
        "media_type": "VIDEO",
        "media_url": "<https://scontent-lga3-1.cdninstagram.com/o1/v/t16/f1/m82/0F4818074E0AC668C32900E89E280EA2_video_dashinit.mp4>...",
        "username": "mattcho5",
        "caption": "Hangover Shuffle V6\\nCasual day for the casual send. (And the little guy that came along)\\n\\n- Powerlinez -\\n\\n#bouldering #climbing #powerlinezbouldering"
      },
      {
        "id": "18280206181189961",
        "media_type": "VIDEO",
        "media_url": "<https://scontent-lga3-1.cdninstagram.com/o1/v/t16/f1/m82/C548453629B21BA0B250E55B78A50C8A_video_dashinit.mp4>...",
        "username": "mattcho5",
        "caption": "New Pair of Glasses V7\\nNever thought I’d do this. Once I was on, climb mode was on. \\n\\n- The Gunks -\\n\\n#bouldering #climbing #gunksbouldering"
      },
      {
        "id": "18001564756667975",
        "media_type": "VIDEO",
        "media_url": "<https://scontent-lga3-1.cdninstagram.com/o1/v/t16/f1/m82/50472CCA34D3C55DC2AC09D9815B84B2_video_dashinit.mp4>...",
        "username": "mattcho5",
        "caption": "I can finally move on. It’s been quite a journey….\\n\\nThe Official V7 - Ice Pond"
      }
    ]
    `;
    const ex_data = JSON.parse(ex_data_string);
    res.status(300).json(ex_data)
    //res.status(500).json({ error: 'Internal Server Error' });
  }
}
