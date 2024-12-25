import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+1234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@lunarit.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: 'Itahari-6,Hatiya Line',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map(({ icon: Icon, title, content }) => (
        <div key={title} className="flex items-center space-x-4">
          <Icon className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-gray-600">{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
