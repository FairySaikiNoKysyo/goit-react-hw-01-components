import { Description, Item, ProfileStyle, Stats } from "./ProfileStyled"

export const Profile = ({username,tag,location,avatar,stats:{followers,views,likes}})=>{
return (
    <ProfileStyle>
    <Description>
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
   </Description>
  
  <Stats>
     <Item>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
        </Item>
     <Item>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
     </Item>
     <Item>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
     </Item>
      </Stats>
    </ProfileStyle>
)
}