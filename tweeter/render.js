const Renderer = function () {
  const renderPosts = function (posts) {
    $('#posts').text('')
    posts.map((post) => {
      $('#posts').append(
      `<div class=post>
       <div class=post-text>${post.text}</div>
       <div class=comments>
         ${(function () {
          let str = ''
          post.comments.map((comment) => {
            str += `<p><button class=delete-comment data-post-id=${post.id} 
               data-comment-id=${comment.id}>X</button>${comment.text}</p>`
          })
          return str;
        })()}
       <input type="text" placeholder="Say something" />
       <button data-id=${post.id}>Comment</button>
       </div>
       <button class=delete data-id=${post.id}>Delete Post</button>
      </div>`
      )
    })
  }
  return { renderPosts };
}