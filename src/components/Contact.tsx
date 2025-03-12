
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to contact me for job opportunities or project collaborations.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="animate-fade-in [animation-delay:200ms]">
            <h3 className="font-display font-bold text-xl mb-4">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Email</h4>
                  <a 
                    href="mailto:john@example.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    john@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                  <Linkedin size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/johndoe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    linkedin.com/in/johndoe
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                  <Github size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm">GitHub</h4>
                  <a 
                    href="https://github.com/johndoe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    github.com/johndoe
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm">
              Currently open to mid-level .NET Developer positions. 
              Available for remote work or relocation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 animate-fade-in [animation-delay:400ms]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
