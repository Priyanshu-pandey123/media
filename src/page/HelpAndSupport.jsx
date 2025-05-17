import { useState } from 'react';
import { Search, MessageCircle, Phone, Mail, BookOpen, Shield, HelpCircle, ChevronDown } from 'lucide-react';

const HelpAndSupport = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);

    const faqs = [
        {
            question: "How do I create a new post?",
            answer: "To create a new post, click on the 'Create Post' button in the top navigation bar. You can then add your title, content, and images. Once you're satisfied with your post, click 'Publish' to share it with the community."
        },
        {
            question: "How can I edit my profile?",
            answer: "You can edit your profile by going to Settings > Profile Settings. Here you can update your profile picture, bio, and other personal information. Changes are saved automatically."
        },
        {
            question: "How do I report inappropriate content?",
            answer: "If you encounter inappropriate content, click the three dots menu on the post and select 'Report'. Our moderation team will review the report and take appropriate action."
        },
        {
            question: "How can I manage my notifications?",
            answer: "You can manage your notifications in Settings > Notifications. Here you can toggle push notifications, email notifications, and customize what types of updates you want to receive."
        }
    ];

    const contactOptions = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Live Chat",
            description: "Chat with our support team",
            action: "Start Chat"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone Support",
            description: "Call us at +1 (555) 123-4567",
            action: "Call Now"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Support",
            description: "support@newsapp.com",
            action: "Send Email"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Help & Support</h1>

                {/* Search Section */}
                <div className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for help..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-3 pl-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {contactOptions.map((option, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="text-blue-600 mb-4">{option.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                            <p className="text-gray-500 mb-4">{option.description}</p>
                            <button className="text-blue-600 font-medium hover:text-blue-700">
                                {option.action}
                            </button>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                    <div className="p-6 border-b">
                        <div className="flex items-center space-x-4">
                            <HelpCircle className="w-6 h-6 text-gray-500" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
                                <p className="text-gray-500">Find answers to common questions</p>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y">
                        {faqs.map((faq, index) => (
                            <div key={index} className="p-6">
                                <button
                                    className="w-full flex items-center justify-between text-left"
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                >
                                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {expandedFaq === index && (
                                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Resources */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-4 mb-4">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-900">User Guide</h3>
                        </div>
                        <p className="text-gray-500 mb-4">
                            Learn how to make the most of our platform with our comprehensive user guide.
                        </p>
                        <button className="text-blue-600 font-medium hover:text-blue-700">
                            Read Guide →
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-4 mb-4">
                            <Shield className="w-6 h-6 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-900">Privacy & Security</h3>
                        </div>
                        <p className="text-gray-500 mb-4">
                            Learn about our privacy policies and security measures to protect your data.
                        </p>
                        <button className="text-blue-600 font-medium hover:text-blue-700">
                            Learn More →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpAndSupport; 