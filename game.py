import pygame
import random
import sys

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
FPS = 60
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
FONT_SIZE = 36

# Create a window
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Math Game")
clock = pygame.time.Clock()

# Fonts
font = pygame.font.Font(None, FONT_SIZE)

# Game variables
score = 0

def generate_equation():
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    result = a + b
    equation_text = f"{a} + ____ = {result}"
    return equation_text, result

def game():
    global score
    equation_text, correct_answer = generate_equation()

    while True:
        screen.fill(WHITE)

        # Display equation
        equation_surface = font.render(equation_text, True, (0, 0, 0))
        screen.blit(equation_surface, (WIDTH // 2 - equation_surface.get_width() // 2, HEIGHT // 4))

        # Display score
        score_surface = font.render(f"Score: {score}", True, (0, 0, 0))
        screen.blit(score_surface, (10, 10))

        # Update the display
        pygame.display.flip()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            if event.type == pygame.MOUSEBUTTONDOWN:
                mouse_pos = pygame.mouse.get_pos()

                # Check if the correct box is clicked
                if WIDTH // 2 - equation_surface.get_width() // 2 < mouse_pos[0] < WIDTH // 2 + equation_surface.get_width() // 2 and \
                        HEIGHT // 4 < mouse_pos[1] < HEIGHT // 4 + equation_surface.get_height():
                    score += 1
                    equation_text, correct_answer = generate_equation()

        clock.tick(FPS)

if __name__ == "__main__":
    game()
