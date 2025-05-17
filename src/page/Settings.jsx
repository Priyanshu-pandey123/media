import { useState } from 'react';
import { Bell, Moon, Globe, Shield, User, Mail, Lock, Eye } from 'lucide-react';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('English');
    const [emailNotifications, setEmailNotifications] = useState(true);

    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Profile Settings */}
                    <section className="p-6 border-b">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="w-8 h-8 text-gray-500" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
                                <p className="text-gray-500">Manage your account information</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <User className="w-5 h-5 text-gray-500" />
                                    <span>Edit Profile</span>
                                </div>
                                <span className="text-gray-400">→</span>
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-gray-500" />
                                    <span>Email Preferences</span>
                                </div>
                                <span className="text-gray-400">→</span>
                            </button>
                        </div>
                    </section>

                    {/* Notifications */}
                    <section className="p-6 border-b">
                        <div className="flex items-center space-x-4 mb-6">
                            <Bell className="w-6 h-6 text-gray-500" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
                                <p className="text-gray-500">Manage your notification preferences</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center space-x-3">
                                    <Bell className="w-5 h-5 text-gray-500" />
                                    <span>Push Notifications</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notifications}
                                        onChange={() => setNotifications(!notifications)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-gray-500" />
                                    <span>Email Notifications</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={emailNotifications}
                                        onChange={() => setEmailNotifications(!emailNotifications)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Appearance */}
                    <section className="p-6 border-b">
                        <div className="flex items-center space-x-4 mb-6">
                            <Moon className="w-6 h-6 text-gray-500" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Appearance</h2>
                                <p className="text-gray-500">Customize your viewing experience</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center space-x-3">
                                    <Moon className="w-5 h-5 text-gray-500" />
                                    <span>Dark Mode</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={darkMode}
                                        onChange={() => setDarkMode(!darkMode)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                            <div className="px-4 py-3">
                                <div className="flex items-center space-x-3 mb-2">
                                    <Globe className="w-5 h-5 text-gray-500" />
                                    <span>Language</span>
                                </div>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Privacy & Security */}
                    <section className="p-6">
                        <div className="flex items-center space-x-4 mb-6">
                            <Shield className="w-6 h-6 text-gray-500" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Privacy & Security</h2>
                                <p className="text-gray-500">Manage your privacy settings</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Lock className="w-5 h-5 text-gray-500" />
                                    <span>Change Password</span>
                                </div>
                                <span className="text-gray-400">→</span>
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Eye className="w-5 h-5 text-gray-500" />
                                    <span>Privacy Settings</span>
                                </div>
                                <span className="text-gray-400">→</span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Settings; 