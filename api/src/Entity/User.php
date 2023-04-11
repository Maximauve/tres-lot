<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ApiResource]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 180, unique: true)]
	private ?string $email = null;

	#[ORM\Column]
	private array $roles = [];

	/**
	 * @var string The hashed password
	 */
	#[ORM\Column]
	private ?string $password = null;

	#[ORM\Column(length: 255)]
	private ?string $username = null;

	#[ORM\Column(length: 255, nullable: true)]
	private ?string $profile_picture = null;

	#[ORM\ManyToMany(targetEntity: Card::class, mappedBy: 'members')]
	private Collection $cards;

	#[ORM\ManyToMany(targetEntity: Workspace::class, mappedBy: 'members')]
	private Collection $workspaces;

	public function __construct()
	{
		$this->cards = new ArrayCollection();
		$this->workspaces = new ArrayCollection();
	}

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getEmail(): ?string
	{
		return $this->email;
	}

	public function setEmail(string $email): self
	{
		$this->email = $email;

		return $this;
	}

	/**
	 * A visual identifier that represents this user.
	 *
	 * @see UserInterface
	 */
	public function getUserIdentifier(): string
	{
		return (string) $this->email;
	}

	/**
	 * @see UserInterface
	 */
	public function getRoles(): array
	{
		$roles = $this->roles;
		// guarantee every user at least has ROLE_USER
		$roles[] = 'ROLE_USER';

		return array_unique($roles);
	}

	public function setRoles(array $roles): self
	{
		$this->roles = $roles;

		return $this;
	}

	/**
	 * @see PasswordAuthenticatedUserInterface
	 */
	public function getPassword(): string
	{
		return $this->password;
	}

	public function setPassword(string $password): self
	{
		$this->password = $password;

		return $this;
	}

	/**
	 * @see UserInterface
	 */
	public function eraseCredentials()
	{
		// If you store any temporary, sensitive data on the user, clear it here
		// $this->plainPassword = null;
	}

	public function getUsername(): ?string
	{
		return $this->username;
	}

	public function setUsername(string $username): self
	{
		$this->username = $username;

		return $this;
	}

	public function getProfilePicture(): ?string
	{
		return $this->profile_picture;
	}

	public function setProfilePicture(?string $profile_picture): self
	{
		$this->profile_picture = $profile_picture;

		return $this;
	}

	/**
	 * @return Collection<int, Card>
	 */
	public function getCards(): Collection
	{
		return $this->cards;
	}

	public function addCard(Card $card): self
	{
		if (!$this->cards->contains($card)) {
			$this->cards->add($card);
			$card->addMember($this);
		}

		return $this;
	}

	public function removeCard(Card $card): self
	{
		if ($this->cards->removeElement($card)) {
			$card->removeMember($this);
		}

		return $this;
	}

	/**
	 * @return Collection<int, Workspace>
	 */
	public function getWorkspaces(): Collection
	{
		return $this->workspaces;
	}

	public function addWorkspace(Workspace $workspace): self
	{
		if (!$this->workspaces->contains($workspace)) {
			$this->workspaces->add($workspace);
			$workspace->addMember($this);
		}

		return $this;
	}

	public function removeWorkspace(Workspace $workspace): self
	{
		if ($this->workspaces->removeElement($workspace)) {
			$workspace->removeMember($this);
		}

		return $this;
	}
}
