'use client';

import { useState }from 'react';
import { healthChat } from '@/ai/flows/health-chat-flow';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Send, MessageSquareHeart } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useLanguage } from '@/context/LanguageContext';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function HealthChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const { response } = await healthChat({
        message: input,
        history: messages,
      });
      const modelMessage: Message = { role: 'model', content: response };
      setMessages([...newMessages, modelMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        role: 'model',
        content: language === 'kn' ? 'ಕ್ಷಮಿಸಿ, ದೋಷ ಎದುರಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.' : 'Sorry, I encountered an error. Please try again.',
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <MessageSquareHeart className="h-6 w-6 text-primary" />
          {language === 'kn' ? 'ಹುದಾ ಆರೋಗ್ಯ ಸಹಾಯಕ' : 'Huda Health Assistant'}
        </CardTitle>
        <CardDescription>
          {language === 'kn' ? 'ಆರೋಗ್ಯ ಮತ್ತು ಸ್ವಾಸ್ಥ್ಯದ ಕುರಿತು ಇಸ್ಲಾಮಿಕ್ ದೃಷ್ಟಿಕೋನಗಳಿಗಾಗಿ ಕೇಳಿ. ವೈದ್ಯಕೀಯ ತುರ್ತುಸ್ಥಿತಿಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.' : 'Ask for Islamic perspectives on health and wellness. For medical emergencies, please consult a doctor.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col h-[400px]">
          <ScrollArea className="flex-1 p-4 border rounded-lg bg-secondary/20">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.role === 'user' ? 'justify-end' : ''
                  }`}
                >
                  {message.role === 'model' && (
                    <Avatar>
                      <AvatarImage src="/al-huda.jpeg" alt="Huda" />
                      <AvatarFallback>H</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                   {message.role === 'user' && (
                    <Avatar>
                      <AvatarFallback>{language === 'kn' ? 'ನೀವು' : 'You'}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               {isLoading && (
                <div className="flex items-start gap-3">
                   <Avatar>
                      <AvatarImage src="/al-huda.jpeg" alt="Huda" />
                      <AvatarFallback>H</AvatarFallback>
                    </Avatar>
                    <div className="max-w-xs rounded-lg px-4 py-2 bg-background">
                        <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <form onSubmit={handleSendMessage} className="mt-4 flex items-center gap-2">
            <Input
              type="text"
              placeholder={language === 'kn' ? 'ಪ್ರಶ್ನೆ ಕೇಳಿ...' : 'Ask a question...'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading} size="icon">
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              <span className="sr-only">{language === 'kn' ? 'ಕಳುಹಿಸು' : 'Send'}</span>
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
