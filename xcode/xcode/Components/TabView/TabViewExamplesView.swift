
import SwiftUI

struct TabViewExamplesView: View {
    @State private var selectedTab = 0

    var body: some View {
        TabView(selection: $selectedTab) {
            Text("First Tab Content")
                .tabItem {
                    Label("First", systemImage: "1.circle.fill")
                }
                .tag(0)
            
            Text("Second Tab Content")
                .tabItem {
                    Label("Second", systemImage: "2.circle.fill")
                }
                .tag(1)
            
            Text("Third Tab Content")
                .tabItem {
                    Label("Third", systemImage: "3.circle.fill")
                }
                .tag(2)
        }
        .navigationTitle("TabView Examples")
    }
}

struct TabViewExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        TabViewExamplesView()
    }
}
