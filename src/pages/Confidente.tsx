import React from 'react';
import { Users, GraduationCap, UserCheck } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import StepsList from '../components/StepsList';
import CallToAction from '../components/CallToAction';
import ConversationSection from '../components/ConversationSection';

const ConfidentePage: React.FC = () => {
  const categories = [
    {
      title: 'MULHERES',
      description: 'com escuta, presença e sutileza',
      icon: <Users size={36} />
    },
    {
      title: 'ESTUDANTES',
      description: 'que querem autonomia com leveza',
      icon: <GraduationCap size={36} />
    },
    {
      title: 'QUEM ENTENDE',
      description: 'que ser feminina é uma força — não uma fraqueza',
      icon: <UserCheck size={36} />
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'MANIFESTE SEU INTERESSE',
      description: 'Diga que deseja viver essa experiência.'
    },
    {
      number: 2,
      title: 'RECEBA O CONVITE PARA UM ESPAÇO EXCLUSIVO',
      description: 'Selecionamos apenas mulheres alinhadas com nossa proposta.'
    },
    {
      number: 3,
      title: 'CRIE SEU PERFIL E ESCOLHA COMO SE MOSTRAR',
      description: 'Aqui, presença vale mais que aparência.'
    },
    {
      number: 4,
      title: 'CONVERSE COM HOMENS INTERESSANTES',
      description:
        'Homens que buscam mais do que distração. Que sabem valorizar uma boa conversa.'
    },
    {
      number: 5,
      title: 'GERE RENDA COM CLASSE E LIBERDADE',
      description: 'Cada troca vale — e você decide quando, com quem.'
    }
  ];

  const heroImage = '/assets/images/confidente_hero.jpg';

  return (
    <>
      <HeroSection
        quote="“"
        title="Existe algo em você que vale muito. Sua escuta. Sua presença. Sua essência."
        subtitle="No Sua Confidente, você é valorizada não por se expor, \n
          mas por estar. Por sentir. Por ser. \n
          Converse com propósito. \n
          Conecte com elegância. \n
          Ganhe com dignidade."
        backgroundImage={heroImage}
        ctaText="QUERO ME INSCREVER"
        page="confidente"
      />
      <ConversationSection />
      <CategorySection categories={categories} />
      <StepsList steps={steps} />
      <CallToAction
        title="VOCÊ NÃO PRECISA SE DESPIR PARA SER DESEJADA."
        backgroundImage="assets/images/category_bg.jpg"
        subtitle="Você só precisa ser você.<br/>E permitir que isso seja reconhecido — com classe."
        btnName="Quero ser uma Confidente"
      />
    </>
  );
};

export default ConfidentePage;
