import { Ionicons } from "@expo/vector-icons";
import React, {useState} from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";

const recommendedSongs = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
  },
  {
    id: "2",
    title: "Starboy",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500",
  },
  {
    id: "3",
    title: "After Hours",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500",
  },
];

const becauseYouListened = [
  {
    id: "4",
    title: "Save Your Tears",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500",
  },
  {
    id: "5",
    title: "I Feel It Coming",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500",
  },
  {
    id: "6",
    title: "In Your Eyes",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500",
  },
];

const discoverArtists = [
  {
    id: "7",
    name: "Frank Ocean",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500",
  },
  {
    id: "8",
    name: "Daniel Caesar",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500",
  },
  {
    id: "9",
    name: "SZA",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500",
  },
];

function SectionHeader({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <Pressable onPress={onPress}>
        <Text style={styles.seeAll}>See all</Text>
      </Pressable>
    </View>
  );
}

function SongCard({
  title,
  artist,
  image,
}: {
  title: string;
  artist: string;
  image: string;
}) {
  return (
    <Pressable style={styles.songCard}>
      <Image source={{ uri: image }} style={styles.albumImage} />

      <Text style={styles.songTitle} numberOfLines={1}>
        {title}
      </Text>

      <Text style={styles.artistName} numberOfLines={1}>
        {artist}
      </Text>
    </Pressable>
  );
}

function SongRow({
  title,
  artist,
  image,
}: {
  title: string;
  artist: string;
  image: string;
}) {
  return (
    <Pressable style={styles.songRow}>
      <Image source={{ uri: image }} style={styles.rowImage} />

      <View style={styles.songInfo}>
        <Text style={styles.rowTitle} numberOfLines={1}>
          {title}
        </Text>

        <Text style={styles.rowArtist} numberOfLines={1}>
          {artist}
        </Text>
      </View>

      <Pressable style={styles.iconButton}>
        <Text style={styles.heart}>♡</Text>
      </Pressable>

      <Pressable style={styles.playButton}>
        <Text style={styles.playIcon}>▶</Text>
      </Pressable>
    </Pressable>
  );
}

function ArtistCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <Pressable style={styles.artistCard}>
      <Image source={{ uri: image }} style={styles.artistImage} />

      <Text style={styles.artistText} numberOfLines={1}>
        {name}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {

    const router = useRouter();
    const [caption, setCaption] = useState('');

    //const goToProfile = (authorId) => router.push({pathname: '/profile'})

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>MusID</Text>
          </View>

          <View style={styles.headerButtons}>

            {/* PROFILE ICON */}
            <Pressable style={styles.headerButton}>
              {/*<Text style={styles.headerIcon}>●</Text>*/}
              <Ionicons
                name="person-outline"
                size={12}
                color="#FFF"
                />
            </Pressable>
          </View>
        </View>

        {/* Search */}
        <Pressable style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            placeholder="Search songs, artists, albums..."
            placeholderTextColor="#888"
            style={styles.searchInput}
            value={caption}
            onChangeText={setCaption}
          />
        </Pressable>

        {/* Category tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContent}
        >
          <Pressable style={styles.categoryActive}>
            <Text style={styles.categoryActiveText}>All</Text>
          </Pressable>

          <Pressable style={styles.category}>
            <Text style={styles.categoryText}>Songs</Text>
          </Pressable>

          <Pressable style={styles.category}>
            <Text style={styles.categoryText}>Artists</Text>
          </Pressable>

          <Pressable style={styles.category}>
            <Text style={styles.categoryText}>Albums</Text>
          </Pressable>

          <Pressable style={styles.category}>
            <Text style={styles.categoryText}>Genres</Text>
          </Pressable>
        </ScrollView>

        {/* Recommended */}
        <View style={styles.section}>
          <SectionHeader title="Recommended for you" />

          <FlatList
            data={recommendedSongs}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.horizontalList}
            renderItem={({ item }) => (
              <SongCard
                title={item.title}
                artist={item.artist}
                image={item.image}
              />
            )}
          />
        </View>

        {/* Because you listened */}
        <View style={styles.section}>
          <SectionHeader title="Because you listened to The Weeknd" />

          <View style={styles.songList}>
            {becauseYouListened.map((song) => (
              <SongRow
                key={song.id}
                title={song.title}
                artist={song.artist}
                image={song.image}
              />
            ))}
          </View>
        </View>

        {/* Discover */}
        <View style={styles.section}>
          <SectionHeader title="Discover something new" />

          <FlatList
            data={discoverArtists}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.horizontalList}
            renderItem={({ item }) => (
              <ArtistCard name={item.name} image={item.image} />
            )}
          />
        </View>

        {/* Recommendation explanation */}
        <View style={styles.explanationCard}>
          <Text style={styles.explanationTitle}>
            Why these recommendations?
          </Text>

          <Text style={styles.explanationText}>
            Your recommendations are based on songs you like, artists you
            listen to, and your listening patterns.
          </Text>

          <Pressable>
            <Text style={styles.learnMore}>Learn more →</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      {/*
      <View style={styles.bottomNavigation}>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIconActive}>⌂</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>⌕</Text>
          <Text style={styles.navText}>Search</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>✦</Text>
          <Text style={styles.navText}>Discover</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>♡</Text>
          <Text style={styles.navText}>Library</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>●</Text>
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      </View>
      */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  content: {
    paddingBottom: 100,
  },

  /* Header */

  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
  },

  greeting: {
    color: "#999999",
    fontSize: 14,
    marginTop: 4,
  },

  headerButtons: {
    flexDirection: "row",
    gap: 10,
  },

  headerButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#242424",
    justifyContent: "center",
    alignItems: "center",
  },

  headerIcon: {
    color: "#FFFFFF",
    fontSize: 17,
  },

  /* Search */

  searchContainer: {
    height: 52,
    marginHorizontal: 20,
    backgroundColor: "#242424",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  searchIcon: {
    color: "#AAAAAA",
    fontSize: 28,
    marginRight: 8,
    paddingBottom: 5
  },

  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
  },

  /* Categories */

  categoryScroll: {
    marginTop: 18,
  },

  categoryContent: {
    paddingHorizontal: 20,
    gap: 10,
  },

  category: {
    backgroundColor: "#242424",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 20,
  },

  categoryActive: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 20,
  },

  categoryText: {
    color: "#BBBBBB",
    fontSize: 14,
    fontWeight: "600",
  },

  categoryActiveText: {
    color: "#121212",
    fontSize: 14,
    fontWeight: "700",
  },

  /* Sections */

  section: {
    marginTop: 30,
  },

  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  seeAll: {
    color: "#AAAAAA",
    fontSize: 13,
  },

  horizontalList: {
    paddingHorizontal: 20,
    gap: 15,
  },

  /* Song cards */

  songCard: {
    width: 145,
  },

  albumImage: {
    width: 145,
    height: 145,
    borderRadius: 10,
    backgroundColor: "#242424",
  },

  songTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 9,
  },

  artistName: {
    color: "#888888",
    fontSize: 13,
    marginTop: 4,
  },

  /* Song rows */

  songList: {
    paddingHorizontal: 20,
  },

  songRow: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#242424",
  },

  rowImage: {
    width: 52,
    height: 52,
    borderRadius: 6,
  },

  songInfo: {
    flex: 1,
    marginLeft: 13,
  },

  rowTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  rowArtist: {
    color: "#888888",
    fontSize: 13,
    marginTop: 4,
  },

  iconButton: {
    padding: 8,
  },

  heart: {
    color: "#AAAAAA",
    fontSize: 25,
  },

  playButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },

  playIcon: {
    color: "#121212",
    fontSize: 13,
    marginLeft: 2,
  },

  /* Artist cards */

  artistCard: {
    width: 120,
    alignItems: "center",
  },

  artistImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  artistText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 9,
  },

  /* Explanation */

  explanationCard: {
    marginHorizontal: 20,
    marginTop: 35,
    padding: 20,
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
  },

  explanationTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  explanationText: {
    color: "#999999",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },

  learnMore: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 14,
  },

  /* Bottom navigation */

  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#181818",
    borderTopWidth: 1,
    borderTopColor: "#292929",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 8,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
  },

  navIcon: {
    color: "#888888",
    fontSize: 22,
  },

  navIconActive: {
    color: "#FFFFFF",
    fontSize: 22,
  },

  navText: {
    color: "#888888",
    fontSize: 11,
    marginTop: 4,
  },

  navTextActive: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 4,
  },
});