import  { useState } from 'react';
import styled from 'styled-components';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBjtuwev4LAYYJzDG4fefOtUfLQjicBgNU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const AIWriterContainer = styled.div`
display: flex;
flex:1;
flex-direction: column;
  padding: 20px;
  text-align: center;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme?.menu_primary_text || '#333'};
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 10px;
   &:hover {
    transform: scale(1.05);
   transition: transform 0.3s ease-in-out; 
  }
`;
const Dropdown = styled.select`
  width: 50%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color:#fff;
  color:  black;
  font-size: 16px;
`;
const Nav = styled.div`

height: 100px;
display: flex;
flex-direction: column;


top: 0;

color: white;`;
const AIWriter = () => {
  const [topic, setTopic] = useState('');
  const [mood, setMood] = useState('');
  const [post, setPost] = useState('');
  const [socmed, setSocmed] = useState('');
  const [loading, setLoading] = useState(false);
  const predefinedTopics = ["Negative","Angry", "Excited", "Witty", "Educational", "Chill"];
  
  const Socmed = ["Twitter", "Telegram", "Whatsapp"];
  // const socmedTog=(socmed?socmed:'Twitter');
  const handleGenerate = async () => {
    if (!topic) {
      alert('Please enter a topic');
      return;
    }
    setLoading(true);
    try {
      const moodTog=  `and set the mood/tone to ${mood}` ;
      const socmedTog=(socmed?socmed:'Twitter');
      const prompt = 'Write a '+socmedTog+' post (generate a single response) on ' + topic +(mood?moodTog:'')+' (use emojis as necessary)' ;
      
      const result = await model.generateContent(prompt);
      setPost(result.response.text());
      console.log(socmedTog);
      
    } catch (error) {
      console.error("Error generating content:", error);
      alert("An error occurred while generating the content. Please try again.");
    } finally {
      setLoading(false);
    }
  };
	
  const handlePost = () => {
    if (!post) {
      alert('No post content to share');
      return;
    }
    const socmedTog=(socmed?socmed:'Twitter')
    const telegramUrl=`https://t.me/share/url?url=%27%27&text=${encodeURIComponent(post)}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(post)}`;
    const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(post)}`;
    if (socmedTog==='Twitter'){window.open(twitterUrl, '_blank');}
    else if (socmedTog==='Whatsapp'){window.open(whatsappUrl, '_blank');}
    else {window.open(telegramUrl, '_blank');}
    
  };

  return (
    <AIWriterContainer><Nav/>
      <Heading>AI Writer</Heading>
      <Dropdown
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      >
        <option value='' disabled >
          Set a mood/tone
        </option>
        {predefinedTopics.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Dropdown>
      <Input
        type="text"
        placeholder="What do you want to post about?"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </Button>
      <TextArea
        placeholder="Generated post will appear here"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <Dropdown
        value={socmed}
        onChange={(e) => setSocmed(e.target.value)}
      >
        <option value='Twitter' disabled >
          Social media platform
        </option>
        {Socmed.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Dropdown>
      <Button onClick={handlePost} disabled={!post} value={socmed}>
        Post
      </Button>
    </AIWriterContainer>
  );
};

export default AIWriter;
