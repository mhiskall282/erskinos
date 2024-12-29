import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Card } from '../ui/Card';

const executives = [
  {
    name: 'Dr Hayford NoMore Walls',
    role: 'Chief Executive Officer',
    image: 'https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/471178149_28299990476280983_3146541980148423006_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHBx6pyLWRxTyziwIrxSz3sczcy5IqWZUNzNzLkipZlQxhK_RsPkuJevJkskvMz3TmT-8_vFdNAVvUTZiD8r6kB&_nc_ohc=XAoA6ItzVdoQ7kNvgGNZ7yQ&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=AJn_KKxhkfmNmvDrKr2a6zk&oh=00_AYB35D0CTX0EWToJBcKZ9bxZ9IW9vSswq2B-DgNSinVNZA&oe=67768CC5',
    linkedin: '#',
    facebook: '#',
    email: 'nomorewalls@gmail.com',
    bio: 'Hayford brings over 20 years of experience in international business and immigration services.',
  },
  {
    name: 'Obroni ',
    role: 'Head of Legal Services',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    email: 'obroni@example.com',
    bio: 'Obroni specializes in immigration law and has helped thousands of clients achieve their goals.',
  },
  {
    name: 'Influenxer AY',
    role: 'Director of Immigration',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    email: 'emma@example.com',
    bio: 'Emma leads our immigration services team with expertise in visa processing and consultation.',
  },
];

export function Executives() {
  return (
    <section id="executives" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {executives.map((executive) => (
            <Card key={executive.name}>
              <img
                src={executive.image}
                alt={executive.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{executive.name}</h3>
                <p className="text-gray-600 mb-4">{executive.role}</p>
                <p className="text-gray-600 mb-4">{executive.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={executive.linkedin}
                    className="text-gray-600 hover:text-[#FFD700] transition-colors"
                    aria-label={`${executive.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${executive.email}`}
                    className="text-gray-600 hover:text-[#FFD700] transition-colors"
                    aria-label={`Email ${executive.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Executives;