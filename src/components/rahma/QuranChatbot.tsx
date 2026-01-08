'use client';

import { useState }from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Send, BookHeart } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useLanguage } from '@/context/LanguageContext';

type Message = {
  role: 'user' | 'model';
  content: string;
};

const comingSoonMessages = {
    en: 'This service is coming soon.',
    kn: 'ಈ ಸೇವೆ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ.',
    hi: 'यह सेवा जल्द ही आ रही है।',
    mr: 'ही सेवा लवकरच येत आहे.',
}

export function QuranChatbot() {
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

    // Simulate a delay and then show the "coming soon" message
    setTimeout(() => {
        const modelMessage: Message = { role: 'model', content: comingSoonMessages[language] };
        setMessages([...newMessages, modelMessage]);
        setIsLoading(false);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookHeart className="h-6 w-6 text-primary" />
          {language === 'kn' ? 'ಕುರಾನ್ ಸ್ಪಷ್ಟೀಕರಣ' : 'Quran Clarification'}
        </CardTitle>
        <CardDescription>
          {language === 'kn' ? 'ಕುರಾನ್ ಬಗ್ಗೆ ಸ್ಪಷ್ಟೀಕರಣಕ್ಕಾಗಿ ಕೇಳಿ.' : 'Ask for clarification on the Quran.'}
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
                      <AvatarImage src="/al-huda.jpeg" alt="'Ilm" />
                      <AvatarFallback>I</AvatarFallback>
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
                      <AvatarImage src="/al-huda.jpeg" alt="'Ilm" />
                      <AvatarFallback>I</AvatarFallback>
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
