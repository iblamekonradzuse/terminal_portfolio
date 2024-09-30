// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `
Hi, I am ${config.name}. 
Welcome to my website!

I am a software engineering student at the University of Paderborn!
I like Rust, Linux, Warhammer 40k and Coffee.
I am currently looking for internships and job opportunities.

More about me:
'sumfetch' - short summary.
'resume' - my latest resume.

`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
space_invaders
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can hire me.`;
};



export const mywork = async (args: string[]): Promise<string> => {
  return `
<u><a href="https://github.com/iblamekonradzuse/space_invaders_like_game" target="_blank">space invaders like game</a></u> // a game that is fully built in rust without using any game engine!

<u><a href="https://github.com/iblamekonradzuse/fitness_tracker_rust" target="_blank">fitness application </a></u> // application with manual and api food, nutrition, and exercise, cardio tracking

<u><a href="https://github.com/iblamekonradzuse/habit_tracker" target="_blank">habit tracker</a></u> // habit tracker with a calendar and daily, weekly and monthly habit streaks, frequency graph, categories and todo list

<u><a href="https://github.com/iblamekonradzuse/real_time_chat_server" target="_blank">realtime chat server</a></u> // real time chat server and client with delete,edit,send message,rooms and admin panel

<u><a href="https://github.com/iblamekonradzuse/terminal_portfolio" target="_blank">terminal portfolio</a></u> // linux terminal looking personal portfolio with commands and ascii art

<u><a href="https://github.com/iblamekonradzuse/hotpoints" target="_blank">hotpoints</a></u> // react app that shows hot points in a google maps format using travel api and google maps api

<u><a href="https://github.com/iblamekonradzuse/FinanceTracker_react" target="_blank">finance tracker</a></u> // monthly finance tracker application built in react 

<u><a href="https://github.com/iblamekonradzuse/chatbot_openAI" target="_blank">popup chatbot </a></u> // chatbot that pops up on the bottom right of the screen and can answer questions using openAI

<u><a href="https://github.com/iblamekonradzuse/image_generator_openAi" target="_blank">image generator </a></u> // image generator that uses openAI to generate images based on text input

`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
      ::::::::      :::     ::::    :::          ::::::::      :::     :::        ::::::::::: ::::::::  :::    :::     :::     ::::    ::: 
    :+:    :+:   :+: :+:   :+:+:   :+:         :+:    :+:   :+: :+:   :+:            :+:    :+:    :+: :+:   :+:    :+: :+:   :+:+:   :+:  
   +:+         +:+   +:+  :+:+:+  +:+         +:+         +:+   +:+  +:+            +:+    +:+        +:+  +:+    +:+   +:+  :+:+:+  +:+   
  +#+        +#++:++#++: +#+ +:+ +#+         +#+        +#++:++#++: +#+            +#+    +#++:++#++ +#++:++    +#++:++#++: +#+ +:+ +#+    
 +#+        +#+     +#+ +#+  +#+#+#         +#+        +#+     +#+ +#+            +#+           +#+ +#+  +#+   +#+     +#+ +#+  +#+#+#     
#+#    #+# #+#     #+# #+#   #+#+#         #+#    #+# #+#     #+# #+#            #+#    #+#    #+# #+#   #+#  #+#     #+# #+#   #+#+#      
########  ###     ### ###    ####          ########  ###     ### ########## ########### ########  ###    ### ###     ### ###    ####       


Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'mywork' to see my work.
Type 'resume' to see my resume.
`;
};
