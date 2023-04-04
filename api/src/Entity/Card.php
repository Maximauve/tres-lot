<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\CardRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CardRepository::class)]
#[ApiResource]
class Card
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	private ?string $title = null;

	#[ORM\Column(length: 255, nullable: true)]
	private ?string $description = null;

	#[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'cards')]
	private Collection $members;

	#[ORM\ManyToMany(targetEntity: Tag::class, inversedBy: 'cards')]
	private Collection $tags;

	#[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
	private ?\DateTimeInterface $due_date = null;

	#[ORM\OneToMany(mappedBy: 'card', targetEntity: Comment::class, orphanRemoval: true)]
	private Collection $comments;

	#[ORM\ManyToOne(inversedBy: 'cards')]
	#[ORM\JoinColumn(nullable: false)]
	private ?Table $parent = null;

	public function __construct()
	{
		$this->members = new ArrayCollection();
		$this->tags = new ArrayCollection();
		$this->comments = new ArrayCollection();
	}

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getTitle(): ?string
	{
		return $this->title;
	}

	public function setTitle(string $title): self
	{
		$this->title = $title;

		return $this;
	}

	public function getDescription(): ?string
	{
		return $this->description;
	}

	public function setDescription(?string $description): self
	{
		$this->description = $description;

		return $this;
	}

	/**
	 * @return Collection<int, User>
	 */
	public function getMembers(): Collection
	{
		return $this->members;
	}

	public function addMember(User $member): self
	{
		if (!$this->members->contains($member)) {
			$this->members->add($member);
		}

		return $this;
	}

	public function removeMember(User $member): self
	{
		$this->members->removeElement($member);

		return $this;
	}

	/**
	 * @return Collection<int, Tag>
	 */
	public function getTags(): Collection
	{
		return $this->tags;
	}

	public function addTag(Tag $tag): self
	{
		if (!$this->tags->contains($tag)) {
			$this->tags->add($tag);
		}

		return $this;
	}

	public function removeTag(Tag $tag): self
	{
		$this->tags->removeElement($tag);

		return $this;
	}

	public function getDueDate(): ?\DateTimeInterface
	{
		return $this->due_date;
	}

	public function setDueDate(?\DateTimeInterface $due_date): self
	{
		$this->due_date = $due_date;

		return $this;
	}

	/**
	 * @return Collection<int, Comment>
	 */
	public function getComments(): Collection
	{
		return $this->comments;
	}

	public function addComment(Comment $comment): self
	{
		if (!$this->comments->contains($comment)) {
			$this->comments->add($comment);
			$comment->setCard($this);
		}

		return $this;
	}

	public function removeComment(Comment $comment): self
	{
		if ($this->comments->removeElement($comment)) {
			// set the owning side to null (unless already changed)
			if ($comment->getCard() === $this) {
				$comment->setCard(null);
			}
		}

		return $this;
	}

	public function getParent(): ?Table
	{
		return $this->parent;
	}

	public function setParent(?Table $parent): self
	{
		$this->parent = $parent;

		return $this;
	}
}
