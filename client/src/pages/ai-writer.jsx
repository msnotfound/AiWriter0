import  { useState } from 'react';
import styled from 'styled-components';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBjtuwev4LAYYJzDG4fefOtUfLQjicBgNU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const AIWriterContainer = styled.div`
  padding: 20px;
  text-align: center;
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
  height: 150px;
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
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
`;

const AIWriter = () => {
  const [topic, setTopic] = useState('');
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) {
      alert('Please enter a topic');
      return;
    }
    setLoading(true);
    try {
      const prompt = 'Write a twitter post (please generate a single response) on ' + topic;
      
      const result = await model.generateContent(prompt);
      setPost(result.response.text());
      
      
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
    const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(post)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <AIWriterContainer>
      <Heading>AI Writer</Heading>
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
      <Button onClick={handlePost} disabled={!post}>
        Post
      </Button>
    </AIWriterContainer>
  );
};

export default AIWriter;
