<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230404103825 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE card_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE comment_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "table_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE tag_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE workspace_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE card (id INT NOT NULL, parent_id INT NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, dueÃ_date TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_161498D3727ACA70 ON card (parent_id)');
        $this->addSql('CREATE TABLE card_user (card_id INT NOT NULL, user_id INT NOT NULL, PRIMARY KEY(card_id, user_id))');
        $this->addSql('CREATE INDEX IDX_61A0D4EB4ACC9A20 ON card_user (card_id)');
        $this->addSql('CREATE INDEX IDX_61A0D4EBA76ED395 ON card_user (user_id)');
        $this->addSql('CREATE TABLE card_tag (card_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(card_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_537933424ACC9A20 ON card_tag (card_id)');
        $this->addSql('CREATE INDEX IDX_53793342BAD26311 ON card_tag (tag_id)');
        $this->addSql('CREATE TABLE comment (id INT NOT NULL, author_id INT NOT NULL, card_id INT NOT NULL, content VARCHAR(255) NOT NULL, date TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_9474526CF675F31B ON comment (author_id)');
        $this->addSql('CREATE INDEX IDX_9474526C4ACC9A20 ON comment (card_id)');
        $this->addSql('CREATE TABLE "table" (id INT NOT NULL, workspace_id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_F6298F4682D40A1F ON "table" (workspace_id)');
        $this->addSql('CREATE TABLE tag (id INT NOT NULL, name VARCHAR(255) NOT NULL, color VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE "user" (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, profile_picture VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
        $this->addSql('CREATE TABLE workspace (id INT NOT NULL, picture VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE workspace_user (workspace_id INT NOT NULL, user_id INT NOT NULL, PRIMARY KEY(workspace_id, user_id))');
        $this->addSql('CREATE INDEX IDX_C971A58B82D40A1F ON workspace_user (workspace_id)');
        $this->addSql('CREATE INDEX IDX_C971A58BA76ED395 ON workspace_user (user_id)');
        $this->addSql('ALTER TABLE card ADD CONSTRAINT FK_161498D3727ACA70 FOREIGN KEY (parent_id) REFERENCES "table" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE card_user ADD CONSTRAINT FK_61A0D4EB4ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE card_user ADD CONSTRAINT FK_61A0D4EBA76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE card_tag ADD CONSTRAINT FK_537933424ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE card_tag ADD CONSTRAINT FK_53793342BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CF675F31B FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C4ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "table" ADD CONSTRAINT FK_F6298F4682D40A1F FOREIGN KEY (workspace_id) REFERENCES workspace (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workspace_user ADD CONSTRAINT FK_C971A58B82D40A1F FOREIGN KEY (workspace_id) REFERENCES workspace (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workspace_user ADD CONSTRAINT FK_C971A58BA76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE card_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE comment_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "table_id_seq" CASCADE');
        $this->addSql('DROP SEQUENCE tag_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_id_seq" CASCADE');
        $this->addSql('DROP SEQUENCE workspace_id_seq CASCADE');
        $this->addSql('ALTER TABLE card DROP CONSTRAINT FK_161498D3727ACA70');
        $this->addSql('ALTER TABLE card_user DROP CONSTRAINT FK_61A0D4EB4ACC9A20');
        $this->addSql('ALTER TABLE card_user DROP CONSTRAINT FK_61A0D4EBA76ED395');
        $this->addSql('ALTER TABLE card_tag DROP CONSTRAINT FK_537933424ACC9A20');
        $this->addSql('ALTER TABLE card_tag DROP CONSTRAINT FK_53793342BAD26311');
        $this->addSql('ALTER TABLE comment DROP CONSTRAINT FK_9474526CF675F31B');
        $this->addSql('ALTER TABLE comment DROP CONSTRAINT FK_9474526C4ACC9A20');
        $this->addSql('ALTER TABLE "table" DROP CONSTRAINT FK_F6298F4682D40A1F');
        $this->addSql('ALTER TABLE workspace_user DROP CONSTRAINT FK_C971A58B82D40A1F');
        $this->addSql('ALTER TABLE workspace_user DROP CONSTRAINT FK_C971A58BA76ED395');
        $this->addSql('DROP TABLE card');
        $this->addSql('DROP TABLE card_user');
        $this->addSql('DROP TABLE card_tag');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE "table"');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE "user"');
        $this->addSql('DROP TABLE workspace');
        $this->addSql('DROP TABLE workspace_user');
    }
}
