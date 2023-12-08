import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as postsAPI from '../../utilities/posts-api';
import * as animesAPI from '../../utilities/animes-api';
import * as jikanAPI from '../../utilities/jikan-api';

export default function PostForm({ addPost }) {
  const navigate = useNavigate();
  // const { animeId } = useParams();

  const [animeData, setAnimeData] = useState({
    images: { jpg: { image_url: '' } },
    title_english: '',
    title_japanese: '',
    synopsis: '',
    mal_id: '',
  });

  const [postData, setPostData] = useState({
    anime: '',
    rating: 3,
    review: '',
  });

  
  
  function handleChange(event) {
    const newPostData = { ...postData, [event.target.name]: event.target.value };
    setPostData(newPostData);
  }

  function handleAddPost(event) {
    event.preventDefault();
    const postResponse = postsAPI.createPost(
      postData
      // ...postData,
      // anime: animeData.mal_id, // Make sure to include anime ID in the post data
    );
    addPost(postResponse);
    setPostData({
      rating: 3,
      review: '',
    });
    navigate('/posts');
  }

  return (
    <>
      
      <form
        onSubmit={ handleAddPost }
      >
          <label className='Font'>
            Anime:
          </label>
            <input
              type='text'
              name='anime'
              onChange={ handleChange }
              value={ postData.anime }
            />
          <label className='Font'>
            Rating:
          </label>
            <select
              name='rating'
              onChange={ handleChange }
              value={ postData.rating }
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          <label className='Font'>
            Review:
          </label>
            <textarea
              type='text'
              name='review'
              onChange={ handleChange }
              value={ postData.review }
            >
            </textarea>
          <button>
            POST
          </button>
      </form>
    </>
  );
}
        
              {/* {animeData && (
                <div key={animeData.mal_id}>
                  <h2>Anime Details</h2>
                  <h3>Title: {animeData.title_english}</h3>
                  <p>Synopsis: {animeData.synopsis}</p>
                  <img src={animeData.images.jpg.image_url} alt={animeData.title} />
                </div>
              )} */}
      // useEffect(() => {
      //   async function getAnimeData() {
      //       try {
      //         const anime = await jikanAPI.getAnime(animeId);
      //         setAnimeData(anime);
      //       } catch (error) {
      //         console.error('Failed to fetch anime information', error);
      //       }
      //     }
      //   if (animeId) {
      //     getAnimeData();
      //   }
      // }, [animeId])




// import './PostForm.css'

// import { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { createPost } from '../../utilities/posts-api'
// import * as jikanAPI from '../../utilities/jikan-api'

// export default function PostForm({ addPost }) {

//   const navigate = useNavigate()
//   const { animeId } = useParams()
//   const [animeData, setAnimeData] = useState({
//     images: { jpg: { image_url: '' } },
//     title_english: '',
//     title_japanese: '',
//     synopsis: '',
//     mal_id: ''
//   })
//   const [postData, setPostData] = useState({
//     rating: 3,
//     review: ''
//   })
  
//   useEffect(() => {
//     async function getAnimeData = () => {
//       if (animeId) {
//         try {
//           const anime = await jikanAPI.getAnime(animeId)
//           setAnimeData(anime)

//         }
//       }
      
//     }
//     getAnime()
//   }, [])

//   // fetch anime mal_id from search results
//   // useEffect(() => {
//   //   if (animeId) {
//   //     // Fetch anime information based on animeId
//   //     jikanAPI.getAnime(animeId)
//   //     // set each prop from results to animeData
//   //     setAnimeData({  
//   //       images: images,
//   //       title_english: title_english,
//   //       title_japanese: title_japanese,
//   //       synopsis: synopsis,
//   //       mal_id: mal_id
//   //     }, [animeId]);
//   //   }
//   // })
      


//   function handleChange(event) {
//     const newPostData = { ...postData, [event.target.name]: event.target.value }
//     setPostData(newPostData)
//   }

//   function handleAddPost(event) {
//     event.preventDefault()
//     const postResponse = createPost(postData)
//     addPost(postResponse)
//     setPostData({
//       anime: '',
//       rating: 3,
//       review: ''
//     });
//     navigate('/posts')
//   }

//   return (
//     <>
//       <form
//         onSubmit={ handleAddPost }
//       >
//           {/* <label className='Font'>
//             Anime:
//           </label>
//             <input
//               type='text'
//               name='anime'
//               onChange={ handleChange }
//               value={ postData.anime }
//             /> */}
//           <label className='Font'>
//             Rating:
//           </label>
//             <select
//               name='rating'
//               onChange={ handleChange }
//               value={ postData.rating }
//             >
//               <option value={1}>1</option>
//               <option value={2}>2</option>
//               <option value={3}>3</option>
//               <option value={4}>4</option>
//               <option value={5}>5</option>
//             </select>
//           <label className='Font'>
//             Review:
//           </label>
//             <textarea
//               type='text'
//               name='review'
//               onChange={ handleChange }
//               value={ postData.review }
//             >
//             </textarea>
//           <button 
//             type='submit'  
//           >
//             POST
//           </button>
//       </form>
//        {animeData && 
//           (
//             <div key={animeData.mal_id}>
//               <h2>Anime Details</h2>
//               <h3>Title: {animeData.title}</h3>
//               <p>Synopsis: {animeData.synopsis}</p>
//               <img src={animeData.images} alt={animeData.title} />
//             </div>
//           )
//         }
//     </> 
//   )
// }
