import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';
import { ProgramsService } from './programs/programs.service';
import { UserRole } from './users/entities/user.entity';
import { ProgramDifficulty } from './programs/entities/program.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const usersService = app.get(UsersService);
  const programsService = app.get(ProgramsService);

  console.log('🌱 Seeding database...');

  try {
    // Create admin user
    const admin = await usersService.create(
      'admin@coachsportif.com',
      'Admin123!',
      'Admin',
      'Coach',
      '+33612345678',
      UserRole.ADMIN,
    );
    console.log('✅ Admin user created:', admin.email);

    // Create sample client
    const client = await usersService.create(
      'client@example.com',
      'Client123!',
      'Jean',
      'Dupont',
      '+33698765432',
      UserRole.CLIENT,
    );
    console.log('✅ Sample client created:', client.email);

    // Create sample programs
    const programs = [
      {
        title: 'Programme Débutant',
        description:
          'Idéal pour commencer votre transformation physique en douceur. Ce programme comprend des exercices adaptés aux débutants avec un suivi personnalisé.',
        difficulty: ProgramDifficulty.BEGINNER,
        price: 49.99,
        duration: '4 semaines',
        features: [
          '3 séances par semaine',
          'Suivi personnalisé',
          'Plan nutritionnel de base',
          'Accès à la plateforme en ligne',
        ],
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
        isActive: true,
      },
      {
        title: 'Programme Intermédiaire',
        description:
          'Pour ceux qui ont déjà une base et souhaitent progresser. Programme complet avec exercices variés et suivi rapproché.',
        difficulty: ProgramDifficulty.INTERMEDIATE,
        price: 79.99,
        duration: '8 semaines',
        features: [
          '4 séances par semaine',
          'Suivi personnalisé avancé',
          'Plan nutritionnel complet',
          'Vidéos d\'exercices',
          'Groupe WhatsApp privé',
        ],
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
        isActive: true,
      },
      {
        title: 'Programme Avancé',
        description:
          'Pour les athlètes confirmés cherchant la performance maximale. Programme intensif avec coaching premium.',
        difficulty: ProgramDifficulty.ADVANCED,
        price: 129.99,
        duration: '12 semaines',
        features: [
          '5-6 séances par semaine',
          'Coaching personnalisé quotidien',
          'Plan nutritionnel sur mesure',
          'Analyse de composition corporelle',
          'Séances vidéo hebdomadaires',
          'Accès prioritaire au coach',
        ],
        imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',
        isActive: true,
      },
      {
        title: 'Programme Perte de Poids',
        description:
          'Programme spécialement conçu pour la perte de poids durable. Combinaison d\'exercices cardio et renforcement musculaire.',
        difficulty: ProgramDifficulty.INTERMEDIATE,
        price: 89.99,
        duration: '10 semaines',
        features: [
          '4 séances par semaine',
          'Plan nutritionnel détaillé',
          'Suivi hebdomadaire',
          'Recettes santé incluses',
          'Support motivation',
        ],
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
        isActive: true,
      },
      {
        title: 'Programme Prise de Masse',
        description:
          'Développez votre masse musculaire avec un programme structuré et un plan nutritionnel adapté.',
        difficulty: ProgramDifficulty.ADVANCED,
        price: 119.99,
        duration: '12 semaines',
        features: [
          '5 séances de musculation par semaine',
          'Plan nutritionnel hyper-protéiné',
          'Suivi de progression détaillé',
          'Vidéos techniques',
          'Supplément recommandés',
        ],
        imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61',
        isActive: true,
      },
    ];

    for (const programData of programs) {
      const program = await programsService.create(programData);
      console.log('✅ Program created:', program.title);
    }

    console.log('\n✨ Database seeded successfully!');
    console.log('\n📝 Login credentials:');
    console.log('Admin: admin@coachsportif.com / Admin123!');
    console.log('Client: client@example.com / Client123!');
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
  } finally {
    await app.close();
  }
}

bootstrap();
