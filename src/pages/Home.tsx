import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import ReasonsList from '../components/ReasonsList';
import CallToAction from '../components/CallToAction';
import ConfidentialitySection from '../components/ConfidentialitySection';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: '/assets/icons/lock.svg',
      title: 'SOLICITE SEU ACESSO',
      description: 'Poucos terão entrada nesta fase.'
    },
    {
      icon: '/assets/icons/user.svg',
      title: 'EXPLORE PERFIS ÚNICOS',
      description: 'Confidentes com elegância, escuta ativa e atitude.'
    },
    {
      icon: '/assets/icons/message.svg',
      title: 'CONVERSE SOB SEUS TERMOS',
      description: 'Texto, áudio ou vídeo. Privado, respeitoso, envolvente.'
    }
  ];

  const reasons = [
    'Porque o silêncio lá fora é barulhento demais.',
    'Porque atenção de verdade é rara — e você merece.',
    'Porque nem todo homem está buscando pornografia. Alguns buscam presença.',
    'Porque você ainda valoriza a arte de conquistar.',
    'Porque um bom papo vale mais do que qualquer distração.'
  ];

  const heroImage = '/assets/images/home_hero.jpg';

  return (
    <>
      <HeroSection
        quote="“"
        title="Conversar com uma mulher que realmente ouve. Poucos sabem o que é isso."
        subtitle="Você é o tipo de homem que desperta atenção. Aqui, a conversa é um privilégio — e você é o centro dela."
        backgroundImage={heroImage}
        ctaText="FAÇA PARTE DA LISTA PRIVADA DO BETA"
        page="home"
      />
      <FeatureSection features={features} />
      <ReasonsList reasons={reasons} />
      <ConfidentialitySection />
      <CallToAction
        title="Estamos selecionando os primeiros homens para viver essa experiência. Não são muitos. E você pode ser um deles."
        backgroundImage="/assets/images/reason-background.jpg"
        btnName="Entrar para a Lista Privada"
      />
    </>
  );
};

export default HomePage;
