import React from 'react'
import { NavLink } from 'react-router-dom'
import videohome from '../assets/videohome.mp4'
import '../css/HomePage.css'
import '../css/Navbar.css'
function HomePage() {
  return (
    <>
      <div>
        <video src={videohome} autoPlay loop muted />
        <div className='video-content'>
          <div className='video-content-top'>
            <p>EN</p>
            <img src='/Vista.png' alt='' />
            <NavLink to='/book' className='btn'>
              BOOK NOW
            </NavLink>
          </div>
          <div className='video-content-bottom'>
            <div className='navbar_buttons'>
              <NavLink to='/stay' className='btn'>
                STAY
              </NavLink>
              <NavLink to='/dining' className='btn'>
                DINING
              </NavLink>
              <NavLink to='/spa' className='btn'>
                SPA
              </NavLink>
              <NavLink to='/corporate' className='btn'>
                CORPORATE
              </NavLink>
              <NavLink to='/services' className='btn'>
                SERVICES
              </NavLink>
              <NavLink to='/contact' className='btn'>
                CONTACT US
              </NavLink>
            </div>
            <img src="/vistaa2.png" alt="" className='h-1/2 w-60'/>
          </div>
        </div>
      </div>
      <div className='h-screen w-full'></div>
      <div className='h-100 w-full bg-white my-0 flex justify-center items-center'>
        <p className='text-4xl text-black w-3/4 h-3/4 my-5 py-7 bg-white flex items-center font-serif font-semibold '>
          <img src='/public/vistaa2.png' alt='' className='h-70 w-60 mr-9' />
          <div className='w-3 h-3/4 bg-black'></div>A warm welcome to Vista
          Resort. A luxury five Star boutique resort in Nairobi. We pride
          ourselves on providing exceptional guest experiences and service,
          ensuring the utmost comfort and luxury.A leafy oasis where city luxury
          meets resort allure. Spread across eight acres, indulge in exceptional
          facilities, exquisite dining, serene gardens and impeccable service.
          Welcome to our Hotel in Nairobi.
        </p>
      </div>
      <div className='stay_homepage'>
        <h1>Rooms & Suites</h1>
        <p>
          Lofty, expansive rooms with vast, bright en-suite bathrooms and large
          private terraces are characteristic of the hotel’s wonderful sense of
          space and use of natural light. There are 45 high-ceilinged suites,
          two of which are penthouse style Presidential Suites and 43 Junior
          Suites culminating in vaulted beams. Muted colors and textured fabrics
          in ecru and taupe create an ambiance of contemporary-chic while subtle
          touches of brass, mahogany and leather bear reference to the classic
          elegance of vintage East African safaris Beyond the balustrade of your
          private balcony, we’ve chosen for you a view of The Green Hills of
          Africa.
        </p>
        <div className='w-15 px-5 rounded-xl mt-12 bg-zinc-700'>
          <NavLink to='/stay' className='view_more2'>
            View More
          </NavLink>
        </div>
        <div className='img_carousel'></div>
      </div>
      <div className='dining_image'>
        <div className='dining_homepage'></div>
        <div className='dining_homepage_inner'>
          <h1>Dining</h1>
          <p>
            Enjoy an array of international dining experiences that will satisfy
            the most refined palettes in Nairobi.
          </p>
          <div className='w-15 px-5 rounded-xl mt-12 bg-zinc-700'>
            <NavLink to='/dining' className='view_more'>
              View More
            </NavLink>
          </div>
        </div>
      </div>
      <div className='text-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sed beatae, doloremque natus necessitatibus ut quia! Quo error quam
        nulla quaerat quisquam aliquam qui incidunt, officia nisi veniam iusto
        quia nobis tempora possimus laboriosam nostrum ex, assumenda sed
        aspernatur harum delectus culpa fugit soluta recusandae! Libero magni
        ratione repellendus quae laborum dolorem, ipsa autem! Quasi tempora
        omnis provident quae natus asperiores exercitationem molestiae numquam
        ea inventore! Molestias veniam, enim id velit temporibus aliquid nulla.
        Dolores eos nisi modi consequuntur excepturi! Quam ut recusandae
        voluptates consequatur delectus, nisi at. Molestiae fuga, provident
        culpa facere aliquam soluta cum deserunt dolores quae placeat
        reprehenderit minima optio cumque dignissimos maxime est ad quaerat. Sed
        labore consectetur omnis sequi. Similique quaerat error molestiae. Saepe
        quod necessitatibus modi quia sit voluptas, nobis voluptate id
        praesentium esse illo, doloremque sunt tempore laborum ipsum provident
        adipisci aspernatur hic dolorum molestiae amet quisquam. Quam officiis
        fuga aliquam, quod earum commodi fugiat consequatur explicabo quis
        inventore ipsum nemo sunt expedita tempore non illo. Rem corrupti sit
        accusamus asperiores minima dignissimos nemo blanditiis, repellendus
        soluta quod repudiandae provident numquam iure vitae labore voluptate
        cupiditate nostrum incidunt ratione aliquam vel. Voluptas a error
        maiores sint ab maxime, quos ex libero? Illum doloribus, ab non eveniet
        suscipit magni sit odio natus doloremque, error harum ut. Recusandae
        accusamus, labore at cupiditate sequi temporibus repellendus eaque
        optio, qui voluptates similique commodi earum dolore tempore non. Non
        esse cupiditate hic. Officiis, doloribus. Nostrum est ut ab, aspernatur
        quae laborum laboriosam nesciunt veritatis officiis eius sint vero sunt
        nemo voluptatibus illum voluptas at adipisci perferendis, quisquam dicta
        assumenda ea fuga culpa! Quisquam eos repellat nam labore quaerat vel
        nobis ipsum itaque, iusto commodi perspiciatis. Ipsam mollitia
        accusantium rem provident? Eligendi aperiam molestias consectetur
        recusandae tenetur ducimus consequuntur, facere fugit minima natus
        assumenda maiores illo unde ratione debitis in dolorum expedita modi
        reiciendis esse iusto? Rerum, in quis quibusdam eaque distinctio
        sapiente libero! Deleniti magni autem delectus accusantium aliquam amet
        natus veritatis aperiam in, non doloribus nostrum. Commodi dolorum
        dolorem earum mollitia ut sunt saepe amet reprehenderit, tempore aut
        incidunt, magni molestias? Laboriosam fuga commodi dolor culpa
        doloremque repudiandae? Voluptas, corporis? Voluptates a porro dolore
        totam quidem enim ut velit aut cumque ratione qui atque voluptatum rerum
        placeat eaque, blanditiis reprehenderit sed, animi ipsa quam. Laboriosam
        explicabo dolor officiis aut ipsum architecto illo perspiciatis, tempora
        aperiam commodi doloremque possimus earum expedita ad eum harum
        inventore hic. Ea velit odio debitis pariatur, asperiores blanditiis
        reprehenderit ipsum possimus! Incidunt quidem architecto adipisci
        obcaecati unde. Itaque enim nulla aliquam quas totam non autem
        laboriosam dolor, inventore quam, iste asperiores nobis voluptatem modi
        possimus nam velit quos officiis veritatis vel perspiciatis, quo cum. A
        voluptate sunt deleniti non necessitatibus repellendus dicta magni odio!
        Iure, blanditiis enim sed nostrum expedita quidem quaerat repellat,
        porro officia reprehenderit magnam quos rem? Sed officia dignissimos
        optio reiciendis recusandae delectus repudiandae, eos similique. Unde
        laudantium deserunt magni consectetur maxime quae in, quidem cum quos
        iste laboriosam incidunt nam ipsum fugiat repellendus cumque voluptates,
        voluptas rem soluta ipsam!
      </div>
      <div className='text-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sed beatae, doloremque natus necessitatibus ut quia! Quo error quam
        nulla quaerat quisquam aliquam qui incidunt, officia nisi veniam iusto
        quia nobis tempora possimus laboriosam nostrum ex, assumenda sed
        aspernatur harum delectus culpa fugit soluta recusandae! Libero magni
        ratione repellendus quae laborum dolorem, ipsa autem! Quasi tempora
        omnis provident quae natus asperiores exercitationem molestiae numquam
        ea inventore! Molestias veniam, enim id velit temporibus aliquid nulla.
        Dolores eos nisi modi consequuntur excepturi! Quam ut recusandae
        voluptates consequatur delectus, nisi at. Molestiae fuga, provident
        culpa facere aliquam soluta cum deserunt dolores quae placeat
        reprehenderit minima optio cumque dignissimos maxime est ad quaerat. Sed
        labore consectetur omnis sequi. Similique quaerat error molestiae. Saepe
        quod necessitatibus modi quia sit voluptas, nobis voluptate id
        praesentium esse illo, doloremque sunt tempore laborum ipsum provident
        adipisci aspernatur hic dolorum molestiae amet quisquam. Quam officiis
        fuga aliquam, quod earum commodi fugiat consequatur explicabo quis
        inventore ipsum nemo sunt expedita tempore non illo. Rem corrupti sit
        accusamus asperiores minima dignissimos nemo blanditiis, repellendus
        soluta quod repudiandae provident numquam iure vitae labore voluptate
        cupiditate nostrum incidunt ratione aliquam vel. Voluptas a error
        maiores sint ab maxime, quos ex libero? Illum doloribus, ab non eveniet
        suscipit magni sit odio natus doloremque, error harum ut. Recusandae
        accusamus, labore at cupiditate sequi temporibus repellendus eaque
        optio, qui voluptates similique commodi earum dolore tempore non. Non
        esse cupiditate hic. Officiis, doloribus. Nostrum est ut ab, aspernatur
        quae laborum laboriosam nesciunt veritatis officiis eius sint vero sunt
        nemo voluptatibus illum voluptas at adipisci perferendis, quisquam dicta
        assumenda ea fuga culpa! Quisquam eos repellat nam labore quaerat vel
        nobis ipsum itaque, iusto commodi perspiciatis. Ipsam mollitia
        accusantium rem provident? Eligendi aperiam molestias consectetur
        recusandae tenetur ducimus consequuntur, facere fugit minima natus
        assumenda maiores illo unde ratione debitis in dolorum expedita modi
        reiciendis esse iusto? Rerum, in quis quibusdam eaque distinctio
        sapiente libero! Deleniti magni autem delectus accusantium aliquam amet
        natus veritatis aperiam in, non doloribus nostrum. Commodi dolorum
        dolorem earum mollitia ut sunt saepe amet reprehenderit, tempore aut
        incidunt, magni molestias? Laboriosam fuga commodi dolor culpa
        doloremque repudiandae? Voluptas, corporis? Voluptates a porro dolore
        totam quidem enim ut velit aut cumque ratione qui atque voluptatum rerum
        placeat eaque, blanditiis reprehenderit sed, animi ipsa quam. Laboriosam
        explicabo dolor officiis aut ipsum architecto illo perspiciatis, tempora
        aperiam commodi doloremque possimus earum expedita ad eum harum
        inventore hic. Ea velit odio debitis pariatur, asperiores blanditiis
        reprehenderit ipsum possimus! Incidunt quidem architecto adipisci
        obcaecati unde. Itaque enim nulla aliquam quas totam non autem
        laboriosam dolor, inventore quam, iste asperiores nobis voluptatem modi
        possimus nam velit quos officiis veritatis vel perspiciatis, quo cum. A
        voluptate sunt deleniti non necessitatibus repellendus dicta magni odio!
        Iure, blanditiis enim sed nostrum expedita quidem quaerat repellat,
        porro officia reprehenderit magnam quos rem? Sed officia dignissimos
        optio reiciendis recusandae delectus repudiandae, eos similique. Unde
        laudantium deserunt magni consectetur maxime quae in, quidem cum quos
        iste laboriosam incidunt nam ipsum fugiat repellendus cumque voluptates,
        voluptas rem soluta ipsam!
      </div>
      <div className='text-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sed beatae, doloremque natus necessitatibus ut quia! Quo error quam
        nulla quaerat quisquam aliquam qui incidunt, officia nisi veniam iusto
        quia nobis tempora possimus laboriosam nostrum ex, assumenda sed
        aspernatur harum delectus culpa fugit soluta recusandae! Libero magni
        ratione repellendus quae laborum dolorem, ipsa autem! Quasi tempora
        omnis provident quae natus asperiores exercitationem molestiae numquam
        ea inventore! Molestias veniam, enim id velit temporibus aliquid nulla.
        Dolores eos nisi modi consequuntur excepturi! Quam ut recusandae
        voluptates consequatur delectus, nisi at. Molestiae fuga, provident
        culpa facere aliquam soluta cum deserunt dolores quae placeat
        reprehenderit minima optio cumque dignissimos maxime est ad quaerat. Sed
        labore consectetur omnis sequi. Similique quaerat error molestiae. Saepe
        quod necessitatibus modi quia sit voluptas, nobis voluptate id
        praesentium esse illo, doloremque sunt tempore laborum ipsum provident
        adipisci aspernatur hic dolorum molestiae amet quisquam. Quam officiis
        fuga aliquam, quod earum commodi fugiat consequatur explicabo quis
        inventore ipsum nemo sunt expedita tempore non illo. Rem corrupti sit
        accusamus asperiores minima dignissimos nemo blanditiis, repellendus
        soluta quod repudiandae provident numquam iure vitae labore voluptate
        cupiditate nostrum incidunt ratione aliquam vel. Voluptas a error
        maiores sint ab maxime, quos ex libero? Illum doloribus, ab non eveniet
        suscipit magni sit odio natus doloremque, error harum ut. Recusandae
        accusamus, labore at cupiditate sequi temporibus repellendus eaque
        optio, qui voluptates similique commodi earum dolore tempore non. Non
        esse cupiditate hic. Officiis, doloribus. Nostrum est ut ab, aspernatur
        quae laborum laboriosam nesciunt veritatis officiis eius sint vero sunt
        nemo voluptatibus illum voluptas at adipisci perferendis, quisquam dicta
        assumenda ea fuga culpa! Quisquam eos repellat nam labore quaerat vel
        nobis ipsum itaque, iusto commodi perspiciatis. Ipsam mollitia
        accusantium rem provident? Eligendi aperiam molestias consectetur
        recusandae tenetur ducimus consequuntur, facere fugit minima natus
        assumenda maiores illo unde ratione debitis in dolorum expedita modi
        reiciendis esse iusto? Rerum, in quis quibusdam eaque distinctio
        sapiente libero! Deleniti magni autem delectus accusantium aliquam amet
        natus veritatis aperiam in, non doloribus nostrum. Commodi dolorum
        dolorem earum mollitia ut sunt saepe amet reprehenderit, tempore aut
        incidunt, magni molestias? Laboriosam fuga commodi dolor culpa
        doloremque repudiandae? Voluptas, corporis? Voluptates a porro dolore
        totam quidem enim ut velit aut cumque ratione qui atque voluptatum rerum
        placeat eaque, blanditiis reprehenderit sed, animi ipsa quam. Laboriosam
        explicabo dolor officiis aut ipsum architecto illo perspiciatis, tempora
        aperiam commodi doloremque possimus earum expedita ad eum harum
        inventore hic. Ea velit odio debitis pariatur, asperiores blanditiis
        reprehenderit ipsum possimus! Incidunt quidem architecto adipisci
        obcaecati unde. Itaque enim nulla aliquam quas totam non autem
        laboriosam dolor, inventore quam, iste asperiores nobis voluptatem modi
        possimus nam velit quos officiis veritatis vel perspiciatis, quo cum. A
        voluptate sunt deleniti non necessitatibus repellendus dicta magni odio!
        Iure, blanditiis enim sed nostrum expedita quidem quaerat repellat,
        porro officia reprehenderit magnam quos rem? Sed officia dignissimos
        optio reiciendis recusandae delectus repudiandae, eos similique. Unde
        laudantium deserunt magni consectetur maxime quae in, quidem cum quos
        iste laboriosam incidunt nam ipsum fugiat repellendus cumque voluptates,
        voluptas rem soluta ipsam!
      </div>
    </>
  )
}

export default HomePage
